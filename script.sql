CREATE TABLE User (
    user_id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);
CREATE TABLE Project (
    project_id INT PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Flag (
    flag_id INT PRIMARY KEY,
    flag_key VARCHAR(255) NOT NULL,
    flag_value VARCHAR(255) NOT NULL,
    project_id INT,
    user_id INT,
    FOREIGN KEY (project_id) REFERENCES Project(project_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Webhook (
    webhook_id INT PRIMARY KEY,
    webhook_url VARCHAR(255) NOT NULL,
    project_id INT UNIQUE,
    FOREIGN KEY (project_id) REFERENCES Project(project_id)
);
