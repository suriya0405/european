import React from 'react';
import SimpleBar from 'simplebar-react'; // Importing SimpleBar
import 'simplebar-react/dist/simplebar.min.css'; // Importing SimpleBar CSS
import '../css/LearnMore.css';

const LearnMore = () => {
  return (
    <div className='split-pane-container'>
        <div className='split-pane uiux-side'>
          <div className='area-container'>
        <SimpleBar className="area" style={{ height: '100vh' }}>
            <div className='content'>
                <div className='text-content'>
                    <div className='program-details'>
                        <h3>NEET Coaching</h3>
                        <ul>
                            <li>Complete NEET Syllabus Coverage:
                                <ul>
                                    <li>Physics: Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics.</li>
                                    <li>Chemistry: Organic, Inorganic, and Physical Chemistry with a focus on high-weightage topics.</li>
                                    <li>Biology: Detailed study of Botany and Zoology, covering Genetics, Ecology, Human Physiology, and more.</li>
                                </ul>
                            </li>
                            <li>Expert Tips for Problem-Solving: Learn time-saving techniques, conceptual clarity, and shortcuts for solving complex questions efficiently.</li>
                            <li>Mock Tests and Practice Sessions: Simulate real NEET exam conditions with full-length mock exams, chapter-wise quizzes, and previous year paper analysis.</li>
                            <li>Revision and Doubt-Clearing Sessions: Focus on thorough revision and last-minute preparation with regular doubt-clearing classes.</li>
                        </ul>

                        <h3>Who Should Attend:</h3>
                        <ul>
                            <li>12th-grade students preparing for NEET.</li>
                            <li>Repeat NEET aspirants looking to improve their scores with a targeted study plan.</li>
                            <li>Students aiming to gain admission to MBBS, BDS, or other medical programs in top Indian colleges.</li>
                        </ul>

                        <h3>Key Features:</h3>
                        <ul>
                            <li>Experienced Faculty: Learn from renowned NEET experts and educators with years of teaching experience.</li>
                            <li>Comprehensive Study Material: Access to concise, exam-oriented notes, question banks, and revision guides.</li>
                            <li>Personalized Learning: Tailored mentorship programs to track individual progress and address weak areas.</li>
                            <li>Regular Assessments: Weekly tests, performance tracking, and feedback to ensure continuous improvement.</li>
                            <li>Online Learning Access: Participate in live interactive classes and access recorded lectures anytime, ensuring flexible learning from home.</li>
                        </ul>

                        <h3>Program Duration:</h3>
                        <p>The course is available as both a long-term (1-year program) for comprehensive preparation and a crash course (3-month intensive program) for focused, last-minute study before the NEET exam.</p>

                        <h3>Certification:</h3>
                        <p>Upon completion of the program, students will receive a certificate, along with detailed performance reports to assess readiness for the NEET exam.</p>
                    </div>
                </div>
            </div>
            </SimpleBar>
            </div>
        </div>

        {/* Front-End Side with NEXT Program Details */}
        <div className='split-pane frontend-side'>
        <div className='area-container'>
        <SimpleBar className="area" style={{ height: '100vh' }}>
            <div className='content'>
                {/* <div className='text-content'>
                    <div className="bold">You want</div>
                    <div className='big'>FRONT-END?</div>
                </div>
                <a className='button'>
                    SHOW ME THE CODE
                </a> */}

                {/* NEXT Program Details Section */}
                <div className='text-content'>
                    <div className='program-details'>
                        <h3>NExT Coaching</h3>
                        <ul>
                            <li>Detailed subject-wise coverage of the NEXT syllabus, including:
                                <ul>
                                    <li>Medicine</li>
                                    <li>Surgery</li>
                                    <li>Pediatrics</li>
                                    <li>Obstetrics and Gynecology</li>
                                    <li>Pharmacology</li>
                                    <li>Pathology, Microbiology, and other preclinical subjects</li>
                                </ul>
                            </li>
                            <li>Clinical case discussions and real-life medical scenarios to enhance problem-solving and diagnostic skills.</li>
                            <li>Exam strategies including time management, question analysis, and elimination techniques for multiple-choice questions.</li>
                            <li>Mock tests simulating the real NEXT exam pattern to familiarize students with exam pressure.</li>
                            <li>Updated curriculum aligned with the latest exam trends and guidelines issued by the National Medical Commission (NMC).</li>
                        </ul>

                        <h3>Who Should Attend:</h3>
                        <ul>
                            <li>Final-year MBBS students preparing for the NEXT exam.</li>
                            <li>Medical graduates looking to sharpen their clinical skills and knowledge base for postgraduate studies.</li>
                            <li>Foreign medical graduates planning to take the NEXT exam to practice in India.</li>
                        </ul>

                        <h3>Key Features:</h3>
                        <ul>
                            <li>Comprehensive Study Material: Get access to updated, exam-focused notes, books, and guides.</li>
                            <li>Live Interactive Classes: Attend lectures from highly qualified medical professionals and subject matter experts.</li>
                            <li>Personalized Mentorship: One-on-one guidance to address individual weaknesses and optimize performance.</li>
                            <li>Regular Assessments: Weekly quizzes and monthly mock exams to track progress and identify areas for improvement.</li>
                            <li>Online Access: Study from anywhere with our fully accessible online platform, offering recorded sessions and 24/7 access to materials.</li>
                        </ul>

                        <h3>Program Duration:</h3>
                        <p>This is an intensive 4-month program with flexible schedules, offering daily or weekly classes, mock exams, and revision sessions to ensure thorough preparation.</p>

                        <h3>Certification:</h3>
                        <p>Upon completion, participants will receive a certificate of training, highlighting their preparedness for the NEXT exam.</p>
                    </div>
                </div>
            </div>
            </SimpleBar>
            </div>
        </div>

    </div>
);
};

export default LearnMore;
