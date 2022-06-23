import React from 'react'
import eslogan from "./imagenes/eslogan.png"
import linea from "./imagenes/lineaDeportiva.png"
import envios from "./imagenes/envios.png"
import mujer from "./imagenes/mujer.png"
import hombre from "./imagenes/hombre.png"
import niños from "./imagenes/niños.png"
import accesorios from "./imagenes/accesorios.png"
import remera from "./imagenes/remera.png"
import sweter from "./imagenes/sweter.png"
import gafas from "./imagenes/gafas.png"
import body from "./imagenes/bodys.png"
import gorra from "./imagenes/gorra.png"
import testimonial1 from "./imagenes/testimoniales1.png"
import testimonial2 from "./imagenes/testimonial2.png"
import testimonial3 from "./imagenes/testimonial3.png"
import Footer from '../footer/footer'
import NavBar from '../NavBar/NavBar'
import "./home.css"

export default function home() {



    return (
        <div className="background">

            <NavBar/>
            <div className="slider">
                <ul>
                <li><img src={eslogan} alt="eslogan"/></li>
                <li><img src={linea} alt="linea"/></li>
                <li><img src={envios} alt="envios"/></li>
                </ul>

            </div>
            <div className="all">

                <h4 className="names">Woman Clothes</h4>
                <h4 className="names">Men Clothes</h4>
                <h4 className="names" >Kids Clothes</h4>
                <h4 className="names">Accessories</h4>
                <img src={mujer} alt="mujer" />
                <img src={hombre} alt="hombre" />
                <img src={niños} alt="niños" />
                <img src={accesorios} alt="accesorios" />
                <button className="boton">See more</button>
                <button className="boton">See more</button>
                <button className="boton">See more</button>
                <button className="boton">See more</button>
            </div>


            <h4 className="Top">Top Sellers</h4>
            <div className="sold">
                <img src={remera} alt="remera" />
                <img src={sweter} alt="sweter" />
                <img src={gafas} alt="gafas" />
                <img src={body} alt="body" />
                <img src={gorra} alt="gorra" />
            </div>


            <h2 className="opinions">Our Costumers Speak</h2>
            <h3 className="under-text">We have been working with costumers around the world</h3>


            <div className="testimonials">
                <blockquote>
                    <div className="frame" >
                        <h5>The best clothes</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a natus laboriosam vitae eos. In optio, perspiciatis deleniti nemo </p>

                    </div>
                    <img className="Photo" src={testimonial1} alt="testimonial" />
                    <cite>David Cooper</cite>
                </blockquote>
                <blockquote>
                    <div className="frame">
                        <h5>On-time delivery</h5>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a natus laboriosam vitae eos. In optio, perspiciatis deleniti nemo </p>
                    </div>
                    <img className="Photo" src={testimonial2} alt="testimonial" />

                    <cite>Esther Hawkins</cite>
                </blockquote>
                <blockquote>
                    <div className="frame">
                        <h5>I could buy easily</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a natus laboriosam vitae eos. In optio, perspiciatis deleniti nemo </p>

                    </div>

                    <img className="Photo" src={testimonial3} alt="testimonial" />
                    <cite>Devon Lane</cite>
                </blockquote>

            </div>


            <div className="stats">

                <h3>5K+</h3>
                <h3>4.5K+</h3>
                <h3>3K+</h3>
                <h3>25+</h3>
                <h4>Happy Costumers</h4>
                <h4>Deliveries</h4>
                <h4>Rewiews</h4>
                <h4>Awards Won</h4>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>


            <Footer />


        </div>
    )
}
