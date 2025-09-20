function Gallery() {  
    const images = [  
        "https://cdn.buttercms.com/qH4PIJq0QCOcisvgQPz6",  
        "https://okdiario.com/img/2020/10/09/5-secretos-de-los-gatos-que-seguramente-no-conoces.jpg",  
        "https://img.freepik.com/foto-gratis/lindo-gato-auto_23-2150932417.jpg?w=1060&t=st=1699577598~exp=1699578198~hmac=4e6990d602e2d80b840607e0d1895d2eb66a3734fe64d61d4940219217927b65"  
    ];  


    return (  
        <section style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>  
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`Imagen ${index + 1}`} style={{ width: "150px", height: "150px" }} />  
            ))}  
        </section>  
    );  
}  


export default Gallery;  