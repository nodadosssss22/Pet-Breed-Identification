from flask import Flask, request, render_template
import os
import sys
import uuid
import shutil
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..', 'identifier-cropper-files'))

from breedidentifier import fukkit

breed = "Breed"

app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def upload():
    breed = "Identifiying..."
    if request.method == 'POST':
        if 'fileInput' not in request.files:
            return render_template('upload_form.html', breed = breed)

        file = request.files.get('fileInput')
        unique_filename = str(uuid.uuid4()) + os.path.splitext(file.filename)[-1]
        
        # Check if a file was selected
        if file is None or file.filename == '':
            return 'No selected file'

        # Check if the file already exists in the upload folder deletes and creates one
        upload_folder = os.path.join("identifier-cropper-files" , "images")
        upload_folders = os.path.join("front-end", "main_folder", "static", "to_display.jpg")

        if os.path.exists(upload_folder):
            shutil.rmtree(upload_folder)

        if not os.path.exists(upload_folder):
            os.makedirs(upload_folder)

        if os.path.exists(upload_folders):
            os.remove(upload_folders)

        file_path = os.path.join(upload_folder, unique_filename)
        file.save(file_path)
        
        file.seek(0)
        
        upload_folder = os.path.join("front-end", "main_folder", "static")
        file_path = os.path.join(upload_folder, "to_display.jpg")
        file.save(file_path)
        
        breed = fukkit()

        # Now, call the breed identifier

        return render_template('upload_form.html', breed = breed.title().replace('_', ' '))
    else:
        # Handle GET request (render form)
        return render_template('upload_form.html', breed = breed.title().replace('_', ' '))

if __name__ == '__main__':
    app.run(debug=True)
