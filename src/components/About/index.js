import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpeg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
                <h5>My name is Edward Kubiak. I am a Full Stack MERN developer currently living in Columbus, Ohio. I love learning new technologies and developing applications that enhance the user experience. Check out my portfolio and resume to learn more about me and my work!</h5>
                    <img src={coverImage} class="center" className="my-2" alt="cover" />
        </section>
    );
}

export default About;