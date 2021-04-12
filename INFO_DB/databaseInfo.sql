CREATE DATABASE node_technical_test;

use node_technical_test;

create table Categories(
	CategoryID int not null AUTO_INCREMENT PRIMARY key,
	CategoryName varchar(15),
    Description longtext,
    Picture blob
)ENGINE=INNODB;

create table Suppliers(
	SupplierID int not null AUTO_INCREMENT PRIMARY key,
	CompanyName varchar(40),
    ContactName varchar(30),
    ContactTitle varchar(30),
    Address varchar(60),
    City varchar(15),
    Region varchar(15),
    PostalCode varchar(10),
    Country varchar(15), 
    Phone varchar(24),
    Fax varchar(24),
    HomePage longtext
)ENGINE=INNODB;


create table Products(
	ProductID int not null AUTO_INCREMENT PRIMARY key,
	ProductName varchar(40),
    SupplierID int,
    CategoryID int, 
    QuantityPerUnity varchar(20),
    UnitPrice decimal(15, 4), 
    UnitsInStock smallint, 
    UnitsOnOrder smallint,
    ReorderLevel smallint,
    Discontinued tinyint
)ENGINE=INNODB;


create table OrderDetails(
	OrderID int,
	ProductID int,
    Quantity smallint,
    UnitPrice decimal(15, 4), 
    Discount real
)ENGINE=INNODB;


create table Orders(
	OrderID int not null AUTO_INCREMENT PRIMARY key,
    CustomerID char(5),
    EmployeeID int, 
    OrderDate datetime(3),
    RequiredDate datetime(3),
    ShippedDate datetime(3),
    ShipVia int,
    Freight decimal(15,4),
    ShipName varchar(40),
    ShipAddress varchar(60), 
    ShipCity varchar(15), 
    ShipRegion varchar(15), 
    ShipPostalCode varchar(10),
    ShipCountry varchar(15)
)ENGINE=INNODB;

create table Employees(
	EmployeeID int not null AUTO_INCREMENT PRIMARY key,
    LastName varchar(20),
    FirstName varchar(20),
    Title varchar(20),
    TitleOfCourtesy varchar(25),
    BirthDate datetime(3),
    HireDate datetime(3),
    Address varchar(60),
    City varchar(15),
    Region varchar(15),
    PostalCode varchar(10),
    Country varchar(15),
    HomePhone varchar(25),
    Extension varchar(4),
    Photo longblob,
    Notes longtext,
    ReportsTo int,
    PhotoPath varchar(255)
)ENGINE=INNODB;

create table Customers(
	CustomerID char(5) not null  PRIMARY key,
    CompanyName varchar(40),
    ContactName varchar(30),
    ContactTitle varchar(30),
    Address varchar(60),
    City varchar(15),
    Region varchar(15),
    PostalCode varchar(10),
    Country varchar(15),
    Phone varchar(25),
    Fax varchar(25)
)ENGINE=INNODB;

create table Shippers(
	ShipperID int not null AUTO_INCREMENT PRIMARY key,
    CompanyName varchar(40),
    Phone varchar(25)
)ENGINE=INNODB;

create table CustomerDemographics(
	CustomerTypeID char(10) not null PRIMARY key,
    CustomerDesc longtext
)ENGINE=INNODB;

create table CustomerCustomerDemo(
	CustomerTypeID char(10),
    CustomerID char(5)
)ENGINE=INNODB;

create table Region(
	RegionID int not null AUTO_INCREMENT PRIMARY key,
    RegionDescription char(50)
)ENGINE=INNODB;

create table Territories(
	TerritoryID varchar(20) not null  PRIMARY key,
    TerritoryDescription char(50),
    RegionID int
)ENGINE=INNODB;

create table EmployeeTerritories(
	TerritoryID varchar(20) ,
    EmployeeID int
)ENGINE=INNODB;



ALTER TABLE Products
ADD FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID);

ALTER TABLE Products
ADD FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID);

ALTER TABLE OrderDetails
ADD FOREIGN KEY (ProductID) REFERENCES Products(ProductID);

ALTER TABLE OrderDetails
ADD FOREIGN KEY (OrderID) REFERENCES Orders(OrderID);

ALTER TABLE Orders
ADD FOREIGN KEY (ShipVia) REFERENCES Shippers(ShipperID);

ALTER TABLE Orders
ADD FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID);

ALTER TABLE Orders
ADD FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID);

ALTER TABLE EmployeeTerritories
ADD FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID);

ALTER TABLE EmployeeTerritories 
ADD FOREIGN KEY (TerritoryID) REFERENCES Territories(TerritoryID);

ALTER TABLE Territories 
ADD FOREIGN KEY (RegionID) REFERENCES Region(RegionID);