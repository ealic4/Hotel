const mysql = require("mysql2/promise");

const insertIntoDB = async() => {
    const  connection = await mysql.createConnection({
        host: "sql4.freesqldatabase.com",
        user: "sql4465582",
        password: "FidNw2QZX3",
        database: "sql4465582",
        port: 3306,
    })

    try{
        await connection.query(
            "INSERT INTO korisnik(id_korisnika,ime,prezime,email,lozinka,broj_telefona) VALUES('1','Denis','Destovic','denisdestovic@gmail.com', 'golfGTI170','060123456')"
        );

    }catch(e){
        console.log(e);
    }
}
insertIntoDB();