import React , {useEffect} from 'react'
import './About.css'
import img from './../images/image2.jpg'
import AOS from 'aos';

const About = () => {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return (
        <div className="about">


            <div className="about_container">
                <div className="about_myself">
                    <div className="imageBox_about">
                        <img src={img} />
                    </div>
                </div>
                <div className="right_myself">
                    <div id="about_info" clasName="about_info" >

                        <h1 className="jawwad">I'm Jawwad Akhter</h1>
                        <h4>A Lead Programmer based in karachi</h4>
                        <p className="para">
                            I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio
                        </p>

                        <hr />
                        <h4>PERSONAL INFO:</h4>
                        <div className="personal">
                            <div className="ulList1">
                                <ul className="ulList">
                                    <li>Name : JAWWAD AKHTER</li>
                                    <li>Age : 22 Years</li>
                                    <li>Nationality : PAKISTAN</li>
                                    <li>Freelance : Available</li>
                                </ul>
                            </div>
                            <div className="ulList2">
                                <ul className="ulList">
                                    <li>Address: House #284</li>
                                    <li>Phone : 03102615674</li>
                                    <li>Email : jawwadakhter674@gmail.com</li>
                                    <li>Language : English , Urdu</li>
                                </ul>

                            </div>
                        </div>
                        <a style={{ textDecoration: 'none' }} href="https://todo-apps-firebase.firebaseapp.com/" target="_blank"><button className="cv_btn">Download Cv</button></a>
                    </div>
                </div>

            </div>



            <h1 className="h1edu jawwad">My Skills & Experience</h1>

            <div className="education container">
                <div className="education_institute" data-aos={"fade-right"}>
                    <h5 className="edu">Education</h5>
                    <ul className="ulEdu">
                        <li className="liEdu">
                            <div className="divEdu">
                                <span className="myspan">2015-2016</span>
                                <p className="mypara"> <span className="myspan"> Matric </span> - Enrich Academy School</p>

                            </div>
                            <hr />
                        </li>
                        <li className="liEdu">
                            <div className="divEdu">
                                <span className="myspan">2016-2018</span>
                                <p className="mypara"> <span className="myspan"> Inter </span> - Govt. Jinnah College</p>

                            </div>
                            <hr />
                        </li>
                        <li className="liEdu">
                            <div className="divEdu">
                                <span className="myspan">2019-2022</span>
                                <p className="mypara"> <span className="myspan"> Bs(Computer Science) </span> -Federal Urdu University-Continue..</p>


                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>



                <div className="education_institute" data-aos={"fade-right"}>
                    <h5 className="edu">Skills</h5>
                    <ul className="ulEdu">
                        <li className="liEdu">
                            <div className="divEdu">
                                <div className="progress">
                                    <div className="spanProgress">

                                        <div>HTML Css Javascript</div>
                                        <div>80%</div>

                                    </div>

                                </div>
                                    <div className="spanBackground">
                                        <div style={{backgroundColor:'#0f172a',width:'85%',height:'100%'}} className="inner_span">

                                        </div>
                                    </div>
                            </div>
                          
                        </li>
                        <li className="liEdu">
                            <div className="divEdu">
                                <div className="progress">
                                    <div className="spanProgress">

                                        <div>React & Redux</div>
                                        <div>70%</div>

                                    </div>

                                </div>
                                    <div className="spanBackground">
                                        <div style={{backgroundColor:'#0f172a',width:'75%',height:'100%'}} className="inner_span">

                                        </div>
                                    </div>
                            </div>
                          
                        </li>
                        <li className="liEdu">
                            <div className="divEdu">
                                <div className="progress">
                                    <div className="spanProgress">

                                        <div>Firebase backend</div>
                                        <div>70%</div>

                                    </div>

                                </div>
                                    <div className="spanBackground">
                                        <div style={{backgroundColor:'#0f172a',width:'70%',height:'100%'}} className="inner_span">

                                        </div>
                                    </div>
                            </div>
                          
                        </li>
                        <li className="liEdu">
                            <div className="divEdu">
                                <div className="progress">
                                    <div className="spanProgress">

                                        <div>Node Js & Express js</div>
                                        <div>50%</div>

                                    </div>

                                </div>
                                    <div className="spanBackground">
                                        <div style={{backgroundColor:'#0f172a',width:'50%',height:'100%'}} className="inner_span">

                                        </div>
                                    </div>
                            </div>
                          
                        </li>
                        <li className="liEdu">
                            <div className="divEdu">
                                <div className="progress">
                                    <div className="spanProgress">

                                        <div>UI & UX with html css </div>
                                        <div>60%</div>

                                    </div>

                                </div>
                                    <div className="spanBackground">
                                        <div style={{backgroundColor:'#0f172a',width:'65%',height:'100%'}} className="inner_span">

                                        </div>
                                    </div>
                            </div>
                          
                        </li>
                       
                    </ul>
                </div>




            </div>


        </div>
    )
}

export default About
