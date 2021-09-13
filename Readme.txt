Readme Installation Instruction

1. Once you downloaded the project, go to
your terminal and cd the project
2. First cd the backend folder and run
the following command:
    * composer update
3. Once a composer successfully downloaded the 
dependency, create a database name called "ip_management"
4. Go to your terminal and cd the backend folder
and run the following command:
    * php artisan migrate,
    * php artisan serve
5. For the frontend just cd the folder to the 
terminal and run the command:
    * ng serve

Usage

The projects consists of Home, List, Login and Register.
In the home page it displays all data of 
ip address added. while in the list page you need to login
first before you can add and update an ip address.
Login page only needs email and password in order to authenticate
to the projects. Register page needs only 
Fullname, Email, Password and Confirm Password.