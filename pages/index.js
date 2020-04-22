import React from "react";
import Layout from "../assets/Layout";
import Link from "next/link";

export default class Index extends React.Component {
    render () {
        return(
            <Layout>
                <div style={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center"}}>
                    <h1>Pradyun Narkadamilli</h1>
                    <img src="/static/me.jpg" className="portrait" style={{marginRight:"auto",marginLeft:"auto"}}/>
                </div>

                <h2 className="underline">About Me</h2>
                <p>I'm a junior at Dougherty Valley High School, intent on going into CS or EECS in the future. I love programming, linux, hardware, just about everything tech-related 🙂. I primarily do back-end work, with a little bit of web-dev on the side.</p>

                <h2 className="underline">Experience</h2>
                <p>The <b><i>juicy</i></b> stuff. There's a lot of things I want to mention, so I'm going to briefly go over the big stuff.</p>
                <ul>
                  <li>I've attended over 10 hackathons since early 2019, learn more about the specifics <Link href="/work#hackathons"><a>here</a></Link></li>
                  <li>I started competing in competitive robotics in late 2018. In an odd little paradox, building inanimate machines taught me how to better interact with those around me, developing my stunted social skills effectively.</li>
                  <li>In March 2020, my XREdu Club-mates and I became national finalists in the Samsung Solve for Tomorrow, winning our school $50,000 in the process. By that point, we had already won $10,000 as state finalists. Learn more about the project <Link href="/work#samsolve"><a>here</a></Link>.</li>
                  <li>I worked as an organizer for <a href="https://www.launchhacks.tech" style={{color:"#8be9fd"}}>LaunchHacks</a> (Tech Director), <a href="https://www.dvhacks.tech" style={{color:"#ff5555"}}>DVHacks II</a> (Tech Organizer), <a href="https://www.dvhacks.tech" style={{color:"#ff5555"}}>DVHacks III</a> (Tech Director), and <a href="https://www.prohacks.me" style={{color:"#50fa7b"}}>ProHacks</a> (Head Director). It felt really good to give back to the community that had given me so much.</li> 
                  <li>Studying in a 5 year program culminated in a bachelor's degree in Telugu in 2015 (that was pretty cool).</li>
                  <li>I'm a second degree black belt in Taekwondo.</li>
                  <li>I started (complex) programming in around the 6th grade. Since then I've worked on a lot of cool stuff, which you can check out <Link href="/work"><a>here</a></Link>. My primary languages are Python, C/C++, Rust, Java, and JavaScript, however I have basic knowledge about a couple other languages.</li>
                  <li>Ever since I began using a computer for work, back in 2010, I've been using Linux (mostly because the laptops were old hand-me-downs). This has conditioned me into a talented sysadmin, and a dedicated linux cultist.</li>
                </ul>

                <h2 className="underline">Contact</h2>
                <p>Want to get in touch? Feel free to send me an email at <a href="mailto:pradyungn@gmail.com">pradyungn@gmail.com</a>, or hit my Discord at <span style={{color:"#8be9fd"}}>Pradyun#9732</span>.</p>
            </Layout>
        )
    }
}
