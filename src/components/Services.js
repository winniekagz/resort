import React, { Component } from 'react';
import Title from "./Title";
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'come enjoy our free cocktails'
            },
            {
                icon:<FaHiking/>,
                title:"awesome hicking expirience",
                info:'dont miss an expirience of a lifetime'
            },
            {
                icon:<FaShuttleVan/>,
                title:"shuttle van",
                info:'tere are shuttle vans to top on the expirience'
            },
            {
                icon:<FaBeer/>,
                title:"best Beer",
                info:'come enjoy our free beer'
            }
        ]
    }
    render() {
        return (
            <section className="services">

               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                       return(
                           <article key={index} className="service">
                               <span>{item.icon}</span>
                               <h6>{item.title}</h6>
                               <p>{item.info}</p>
                           </article>

                       );

                   })}
               </div>
            </section>
        )
    }
}
