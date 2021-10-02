import React, { useState } from 'react'
import './Project.css'
import { CardsData } from './CardsData'
import Buttons from './Buttons'
import GitHubIcon from '@mui/icons-material/GitHub';



const Project = () => {

    const [itemData, setItemData] = useState(CardsData)
   const allCategory=['All',...new Set(CardsData.map(data=>data.category))]
   console.log(allCategory)

    const filter = (btnData) => {

       if(btnData === "All"){
           return setItemData(CardsData)
           
       }

        const filterData = CardsData.filter(item => item.category === btnData)
        setItemData(filterData)
    }

    return (
        <div className="project">

            <div className="btns">
                {/* <button className="active" onClick={()=>filter("All")} >ALL</button>
                <button type="button" onClick={() => filter("html")}>HTML & CSS</button>
                <button>HTML & CSS</button>
                <button>HTML & CSS</button> */}
                <Buttons category={allCategory} filter={filter} />
            </div>

            <div className="cardBody">
                {
                    itemData.map((v, i) => (

                        <div className="mainCard" key={i}>
                            <div className="imageBox">
                                <img className="img" src={v.image} />
                            </div>
                            <div className="info">
                                <h2>{v.title}</h2>
                                <p>{v.description}</p>
                                {/* <a className="github" href="" target="_blank"><GitHubIcon className="icons" /></a> */}
                            </div>
                            <button> <a href={v.link} target="_blank" style={{textDecoration:'none',color:"#fff"}}>See Demo</a></button>
                        </div>
                        // console.log(i)
                    ))
                }
            </div>
        </div>
    )
}


export default Project;