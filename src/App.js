import "./App.css";

import bust from "./img/main-bust.png";
import fsoc from "./img/fsoc.JPG";
import madsa from "./img/madsa.png";
import workout from "./img/workout-app.PNG";
import roc from "./img/roc-results.png";

import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import SideBar from "./components/SideBar";
import useWindowDimensions from "./hooks/Window";

function App() {
  const {width} = useWindowDimensions()

  return (
    <div className="App" id="0">
      <SideBar innerWidth={width}/>
      <div id="main-body">
        <div id='cards'>
          <div id="socials">
            <a
              className="none"
              href="https://www.linkedin.com/in/cary-xiao/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a
              className="none"
              href="https://github.com/CaryXiao1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a
              className="none"
              href="mailto:caryxiao@cs.stanford.edu"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope fa-xl"></i>
            </a>
          </div>
          <div className="card" id='main-picture'>
            <img src={bust} className="App-logo" alt="logo" />
            <h3 id="img-text">
              Hey There! <br />
              I'm Cary, a Computer Science major at Stanford University. I enjoy
              working on projects that can help others.
            </h3>
          </div>
          <hr className="divide-card" />
          <h1 className="section-header" id="1">
            projects
          </h1>

          <ProjectCard id='2' img={workout} img_alt={'Screenshot of workout app with sample information inputted.'} img_float_left={true} innerWidth={width} text={
            <>
            <a
                className="h2"
                href="https://caryxiao.com/workout-app/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Workout App</h2>
              </a>
              <p>
                Over the summer of 2022, I designed a workout helper application
                using React, allowing users to store their weightlifting-related
                workouts and exercises. I also used Chart.js to create line graphs
                showing the given person's body weight, BMI, or exercise-specific
                weight over time.
              </p>
              <p>
                The application can be found{" "}
                <a
                  className="h2"
                  href="https://caryxiao.com/workout-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                {", "}
                and the source code can be found{" "}
                <a
                  className="h2"
                  href="https://github.com/CaryXiao1/workout-app/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </>
          } />
          <ProjectCard id='3' img={roc} img_alt={'Resulting ROC Curves from Patient-GAT model testing.'} img_float_left={false} innerWidth={width} text={
            <>
            <a
                className="h2"
                href="https://github.com/CaryXiao1/Patient-GAT"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  Patient-GAT: Disease Prediction using Multi-modal Data Fusion
                  and Weighted Graph Attention Networks
                </h2>
              </a>
              <p>
                As my main research project in the NSF REU at IUPUI, I worked with
                a parter in a student-led project to predict health conditions
                using Graph Attention Networks.
              </p>
              <p>
                To do this, we used patient's Electronic Health Record Data,
                imputing lab variables related to sarcopenia and converting each
                patient's data into a vector representation. Finally, we created a
                patient similarity network using a combination of cosine and
                Dynamic Time Warping similarity, finally training and evaluating
                our Graph Attention Network Model. Our results showed that our
                model outperformed other non-Neural Network and non-Graph-based
                models in terms of Area Under AUC Curve (AUC).
              </p>
              <p>
                The paper for this project has been submitted to the{" "}
                <a
                  className="h2"
                  href="http://ieeebibm.org/BIBM2022/"
                  target="_blank"
                  rel="noreferrer"
                >
                  2022 BIBM conference
                </a>
                .
              </p>
            </>
          } />
          <ProjectCard id='4' img={fsoc} img_alt={'Front and back of built FSOC devices, placed on a dirt ground filled with leaves.'} img_float_left={true} innerWidth={width} text={
            <>
            <a
                className="h2"
                href="https://dl.acm.org/doi/abs/10.1145/3476883.3520201?casa_token=tuTFKVQfShAAAAAA:hhodH-5JIvhYZCpHVqxHotXd53BHkaOPJyoAlgg7IifU5B-_C0cei2eyMsyQcbQavP5_HP8UNhPz1w"
                target="_blank"
                rel="noreferrer"
              >
                <h2>
                  A Low-Power, Machine Learning-based Optical Communications
                  System for Disaster Relief
                </h2>
              </a>
              <p>
                For this project, I designed and built a 3D-printed,
                Arduino-based, automatically realigning wireless communication
                system to be quickly deployed into disaster-struck regions with
                damaged infrastructure. The prototype used an array of
                photoelectric diodes to identify where the transmitter's laser was
                hitting the reciever, enabling for the devices to realign their
                lasers and reduce network downtime.
              </p>
              <p>
                I also trained an SVM Machine Learning model to correct errors for
                essential messages sent through the previously created system,
                leveraging the redundancy of natural language to correct up to 98%
                of 1-bit errors in words.{" "}
              </p>
              <p>
                This project was presented in the 2020 and 2021 Regeneron
                International Science & Engineering Fair (ISEF), and it was
                published in the 2022 ACM Southeast Conference.
              </p>
            </>
          } />
          <ProjectCard id='5' img={madsa} img_alt={'Screenshot of MADSA Application.'} img_float_left={false} innerWidth={width} extra_classes={'mobile-nospacing'} text={
            <>
            <a
                className="h2"
                href="https://dl.acm.org/doi/abs/10.1145/3374135.3385273?casa_token=VTyd9nSTi2IAAAAA:9-B_bu7VsocthrQKZZjrr73B2CkH4rHthFScYQtTB_PVY-HHSO05mA2k--4Ubmokv75vQsU9w4puig"
                target="_blank"
                rel="noreferrer"
              >
                <h2>MADSA: Music Accuracy Development using Spectral Analysis</h2>
              </a>
              <p>
                In this project, I developed a Java-based Music Helper Application
                to aid aspiring musicians in learning pieces without having to pay
                for a tutor. To do this, the application used a Fast Fourier
                Transform to create overlapping spectrograms, which graphically
                compared the performance of the user versus a reference sound
                file.
              </p>
              <p>
                I presented the project at the 2019 Intel ISEF and received the
                2019 Oracle Academy Award. I also presented and published the
                paper in the 2020 ACM Southeast Conference .
              </p>
            </>
          } />
          <hr className="divide-card" />
          <h1 className="section-header" id="6">
            experience
          </h1>
          
          <ExperienceCard id='7' 
                          title={<a
                                    className="h2"
                                    href="https://oppia.org"
                                    target="_blank"
                                    rel="noreferrer"
                                  ><h2>DevOps Contributor</h2></a>}
                          place='Oppia Foundation'
                          date='February 2023 - Present'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                              I help to improve the experience for Oppia developers by fixing
                              issues and adding features to the Pull Request (PR) testing
                              framework. 
                            </p>
                            <p>
                              I will also help troubleshoot student code and grade assignments
                              every week, and twice during the quarter, I will aid in grading
                              the midterm or final for the class.
                            </p>
                            </>
                          } />

          <ExperienceCard id='7' 
                          title={<a
                                    className="h2"
                                    href="https://cs198.stanford.edu/cs198/ProgramStructure.aspx"
                                    target="_blank"
                                    rel="noreferrer"
                                  ><h2>CS 198 Instructor for Programming Methodologies</h2></a>}
                          place='Stanford University'
                          date='September 2022 - Present'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                              I will lead sections for{" "}
                              <a
                                className="h2"
                                href="https://web.stanford.edu/class/cs106a/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                CS 106A
                              </a>{" "}
                              in Autumn 2022, teaching students about core concepts and
                              practices of programming in Python.
                            </p>
                            <p>
                              I will also help troubleshoot student code and grade assignments
                              every week, and twice during the quarter, I will aid in grading
                              the midterm or final for the class.
                            </p>
                            </>
                          } />
          <ExperienceCard id='8'
                          title={<a
                            className="h2"
                            href="https://et.iupui.edu/departments/cigt/research/reu/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <h2>NSF REU Researcher</h2>
                          </a>}
                          place='IUPUI'
                          date='June 2022 - August 2022'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                I spent my summer learning about the fundamentals of Cybersecurity
                and researching as an undergraduate, where we learned about topic
                such as WPA/WPA2 encryption, historical cryptographic methods, and
                ideal hash function properties.
              </p>
              <p>
                As my primary research project, I worked with a partner to predict
                health outcomes using Graph Attention Mechanisms. For more
                information, please see 'Patient-GAT' under Projects.
              </p>
                            </>
                          } />
          <ExperienceCard id='9'
                          title={<a
                            className="h2"
                            href="https://earth.stanford.edu/equitable-transportation-decarbonization"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <h2>
                              Research Assistant, Decommisioning ICE Vehicles (DIVE) Group
                            </h2>
                          </a>}
                          place='Stanford University'
                          date='October 2021 - January 2022'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                I used Python to call Google Maps APIs and gather average
                rush-hour commute times on critical roads in Sonoma County, CA.
              </p>
              <p>
                I also processed the data to find out how the commute times on a
                given road changed over time on a given day, allowing for
                potential future analysis of this data to help estimate the number
                of cars on sections of the road and to compare this data to
                pollution levels in Sonoma County.{" "}
              </p>
                            </>
                          } />
          <ExperienceCard id='10'
                          title={<h2>Course Instructor, Adventures in Math and Science (AIMS)</h2>}
                          place='Alabama School of Math and Science'
                          date='June 2021 - July 2021'
                          innerWidth={width}
                          text={
                            <>
                            <p>
                Throughout June and July, I repeatedly taught two weeklong virtual
                classes on 3D Printing and making devices using Arduinos to middle
                and high school students, giving hour-long introductory lectures
                and helping students troubleshoot problems with their circuits and
                arduino code.
              </p>
              <p>
                Aside from helping summer-time students in the ASMS-hosted summer
                camps, I also taught these classes to disadvantaged students as a
                partnership between ASMS and the Boy's and Girl's Club of Alabama.
              </p>
              <p>
                <em>
                  Note: The AIMS Summer Camp has since been replaced with the{" "}
                  <a
                    className="h2"
                    href="https://www.asms.net/summer-camps/alabama-stem-leadership-academy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ASMS STEM Leadership Academy
                  </a>
                  .
                </em>
              </p>
                            </>
                          } />

          <hr className="divide-card" />
          <h1 className="section-header" id="11">
            helpful links
          </h1>
          <div className="card mobile-nospacing">
            <a
              id="12"
              href="https://drive.google.com/drive/folders/1XxXDQGibDqgMzAy91GpN_wavApQQd4SR?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
            {" "}
            <a
              id="13"
              href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C15&q=%22Cary+Xiao%22&btnG=&oq=%22cary+"
              target="_blank"
              rel="noreferrer"
            >
              
              publications
            </a>
            {" "}
            <a
              id="14"
              href="https://caryxiao.com/old-website/"
              target="_blank"
              rel="noreferrer"
            >
              
              old website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
