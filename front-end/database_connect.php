<?php 

// Define a class
class users_class {
    public $index;
    public $email;
	public $username;
    public $password;

    // Storing method
    public function __construct($value_index, $value_username, $value_password, $value_email) {
        $this->index = $value_index;
        $this->email = $value_email;
		$this->username = $value_username;
        $this->password = $value_password;
    }
}

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$databasename = "petpick_db"; 

// CREATE CONNECTION 
$conn = new mysqli($servername, 
	$username, $password, $databasename); 

// GET CONNECTION ERRORS 
if ($conn->connect_error) { 
	die("Connection failed: " . $conn->connect_error); 
}

function fetch_data($con) {

	// SQL QUERY 
	$query = "SELECT * FROM `credentials`;"; 

	// FETCHING DATA FROM DATABASE 
	$result = $con->query($query); 

	$users = array();

	if ($result->num_rows > 0) 
	{
		// OUTPUT DATA OF EACH ROW 
		while($row = $result->fetch_assoc()) 
		{
			$user_object = new users_class($row["uid"],$row["username"],$row['u_password'],$row['email']);
			$users[] = $user_object;
		}
	} 
		else { 
			// No entry if so 
		}
		return $users;
}

function credentials_validation($data, $username_attempt, $password_attempt) {
    foreach ($data as $validated_credentials) {
        if (($validated_credentials->username == $username_attempt) && (password_verify($password_attempt, $validated_credentials->password))) {
            return TRUE;
        }
    }
    return FALSE;
}
?>
