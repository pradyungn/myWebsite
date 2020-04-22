import React from "react"
import Head from "next/head";
import Link from "next/link";
import { FaTwitter, FaGithub, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

export default class Layout extends React.Component {
    render() {
        return (
          <div style={{ height: "100%", marginTop: "10px" }}>
                <div className="cont">
                    <Head>
                        <title>Pradyun N.</title>
                        <script src="script.js"></script>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta name="og:title" content="Pradyun N." />
                        <meta name="og:description" content="Who called the geek squad?" />
                        <meta name="og:image" content="https://www.pradyungn.tech/static/me.jpg" />
                    </Head>
                    <div className="header">
                        <a href="/" style={{ flex: 1, textAlign: "center" }}>@pradyungn</a>
                        <a style={{ flex: 3 }}></a>
                        <div style={{ flex: 2, display: "flex" }}>
                            <a style={{ marginRight: "10px"}} href="https://blog.pradyungn.tech">Blog</a>
                            <Link href="/work"><a>Work</a></Link>
                            <a href="/static/resume.pdf" style={{marginLeft:"10px"}}>Resume</a>
                       </div>
                    </div>
                    <div id="main" style={{ display: "inline" }}>
                        {this.props.children}
                    </div>
                    <footer>
                        <div style={{ margin: "auto" }}>
                            <a style={{ color: "white" }} href="https://www.facebook.com/profile.php?id=100009257228843"><FaFacebookSquare size="2em" className="icon" /></a>
                            <a style={{ color: "white" }} href="https://github.com/pradyungn"><FaGithub size="2em" className="icon" /></a>
                            <a style={{ color: "white" }} href="https://twitter.com/pradyungn"><FaTwitter size="2em" className="icon" /></a>
                            <a style={{ color: "white" }} href="https://www.linkedin.com/in/pradyun-n-958499b8/"><FaLinkedin size="2em" className="icon" /></a>
                        </div>
                    </footer>
                    <style jsx global>{`
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,700&display=swap');
                        body,html {
                            font-family: 'Roboto', sans-serif;
                            font-weight:400;
                            height:100%;
                        }
                        .header {
                            width:100%;
                            display:flex;
                            top:0;
                            left:0;
                        }
                        .underline {
                            border-bottom:4px solid #caa9fa;
                            display:inline-block;
                            margin-bottom:10px;
                        }
                        .storline {
                            border-bottom:4px solid #8be9fd;
                            display:inline-block;
                            margin-bottom:10px;
                        }
                        html {
                            display:flex;
                        }
                        .cont {
                            width:700px;
                            height:100%;
                            display:flex;
                            flex-direction:column;
                        }
                        a {
                            text-decoration:none;
                            font-weight:700;
                            font-style: italic;
                            color:#ff79c6;
                        }
                        a:hover {
                            color:#bfbfbf;
                            text-decoration:underline;
                        }
                        li {
                            margin:10px;
                        }
                        body {
                            height:100%;
                            display:flex;
                            margin-right:auto;
                            margin-left:auto;
                            width:700px;
                        }
                        @media screen and (max-width:740px) {
                            body {
                                width:100vw;
                            }
                            .cont {
                                width:93vw;
                                margin-left:4vw;
                                margin-right:3vw;
                            }
                        }
                        .icon:hover {
                            color:#bfbfbf;
                            cursor:pointer;
                        }
                        .icon {
                            margin:10px;
                            color:white;
                            
                        }
                        footer {
                            height:50px;
                            display: flex;
                            flex-direction:column;
                            margin-top:auto;
                        }
                        h1 {
                            font-family: 'Roboto', sans-serif;
                            font-weight:900;
                        }
                        h2 {
                            font-weight:700;
                        }
                        .portrait {
                            width:150px;
                            border-radius:200px;
                        }
                        html {
                            background-color:#282a36;
                            color:white;
                        }
                    `}</style>
                </div>
            </div>
        )
    }
}
