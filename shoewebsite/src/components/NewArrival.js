import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import n1 from './img/products/n1.jpeg';
import n2 from './img/products/n2.jpeg';
import n3 from './img/products/n3.jpeg';
import n4 from './img/products/n4.jpeg';
import n5 from './img/products/n5.jpeg';
import n6 from './img/products/n6.jpeg';
import n7 from './img/products/n7.jpeg';
import n8 from './img/products/n8.jpeg';

export default function NewArrival() {
  return (
    <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Formal Shoes for Men & Women!</p>
        <div className="pro-container">
            <div className="pro">
                <img src={n1} alt="" height="200px"/>
                <div className="des">
                    <span>RAYMOND</span>
                    <h5>NLSCGZM Classic Oxford Men's Dress Shoes</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>4000/-</h4>
                </div>
                
                <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                


            </div>

            

            <div className="pro">
                <img src={n2} alt="" height="200px"/>
                <div className="des">
                    <span>WIKILEAKS</span>
                    <h5> NLSCGZM Classic Italian Derby Men's Dress Shoes </h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>7000/-</h4>
                </div>
                
                <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                


            </div>

            <div className="pro">
                <img src={n3} alt="" height="200px"/>
                <div className="des">
                    <span>DWAYNE</span>
                    <h5>Dwayne Classic Brogue Men's Dress Shoes</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>6000/-</h4>
                </div>
                
                <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                


            </div>

            <div className="pro">
                <img src={n4} alt="" height="200px"/>
                <div className="des">
                    <span>BIGTREE</span>
                    <h5>NLSCGZM Classic Italian Oxford Men's Dress Shoes</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>4000/-</h4>
                </div>
                
                <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                


            </div>

            <div className="pro">
                <img src={n5} alt="" height="200px"/>
                <div className="des">
                    <span>ALLEN SOLLY</span>
                    <h5> Green Solid Slim Heels</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>2000/-</h4>
                </div>
                
                <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                


            </div>

            <div className="pro">
                <img src={n6} alt="" height="200px"/>
                <div className="des">
                    <span>MANGO</span>
                    <h5>Black Solid Heels</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>6000/-</h4>
                </div>
                
                <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                


            </div>

            <div className="pro">
                <img src={n7} alt="" height="200px"/>
                <div className="des">
                    <span>CODE</span>
                    <h5>Black Solid Block Heels</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>1500/-</h4>
                </div>
                
                <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                


            </div>

            <div className="pro">
                <img src={n8} alt="" height="200px"/>
                <div className="des">
                    <span>DRESSBERRY</span>
                    <h5>Women Nude Coloured Solid Heels</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>3000/-</h4>
                </div>
                
                <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                


            </div>

        </div>
    </section>
  )
}
