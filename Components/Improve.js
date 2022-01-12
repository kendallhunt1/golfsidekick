import React from 'react';
import PlayerTab from './PlayerTab';
import '../Styles/Improve.css';
import RightArrow from '../SVGs/rightArrow.svg';


const Improve = () => {
    return (
        <div className="improve">
            <div className="improvementContentLeft">
            <div className="playerTabImprove" style={{background: "rgb(255,237,86)", background: "linear-gradient(125deg, rgba(255,237,86,1) 35%, rgba(242,220,36,1) 100%)"}}>
            <h1>Happy Gilmore</h1>
            <div className="handicapDisplay">
                <div style={{fontSize: "2rem"}}>0.2</div>
                <div style={{fontWeight: "800"}}>HDCP</div>
            </div>
        </div>
                <div className="writtenImprovementTips">
                    {/* Written Improvement box will be turned into a component that is populated by PROPS, and it will render out to the UI */}
                    <div className="writtenImprovementBoxWrapper">
                        <div className="writtenImprovementBox">
                            <div className="writtenImprovementHeading">
                                <h2>Play From More Fairways</h2>
                            </div>
                            <div className="writtenImprovementDescription">
                                <p>
                                Your average hole score is better when you hit the fairway from the 
                                tee. Stop worrying so much about distance, and start worrying more
                                about the fairway, and you’ll see better scores.
                                </p>
                            </div>
                            <div className="writtenImprovementDataReference">
                                <h2>SEE DATA REFERENCED</h2>
                            </div>
                        </div>
                    </div>


                    <div className="writtenImprovementBoxWrapper">
                        <div className="writtenImprovementBox">
                            <div className="writtenImprovementHeading">
                                <h2>Improve Your Chipping</h2>
                            </div>
                            <div className="writtenImprovementDescription">
                                <p>
                                Higher handicap players add most of their strokes on, and around the greens.
                                Your GIR percentage is low, which means you're around the green often. As fun as it is
                                to hit the ball far, focus a lot of your practice on your short game and you see strokes shaven
                                off your average score!
                                </p>
                            </div>
                            <div className="writtenImprovementDataReference">
                                <h2>SEE DATA REFERENCED</h2>
                            </div>
                        </div>
                    </div>

                    <div className="writtenImprovementBoxWrapper">
                        <div className="writtenImprovementBox">
                            <div className="writtenImprovementHeading">
                                <h2>Play Away From Hazards</h2>
                            </div>
                            <div className="writtenImprovementDescription">
                                <p>
                                As simple as this advice is, when a hazard could be in play, just avoid it.
                                Whether it be laying up, or just playing from a different side of the hole, this
                                will result in lower scores because of the strokes that drops adds to your scores.
                                </p>
                            </div>
                            <div className="writtenImprovementDataReference">
                                <h2>SEE DATA REFERENCED</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="improvementContentRight">
                <div className="pointToResources">
                    <div className="pointToResourceDescription">
                        <p className="resourceParagraph">
                            Some channels, and resources that we love, and are a great
                            point of reference for all of your golf questions, and ambitions!
                        </p>
                    </div>
                    <div className="pointToResourceArrow">
                        <img src={RightArrow} alt="Arrow" style={{height: "100%", width: "auto"}}/>
                    </div>
                </div>

                <div className="resourceVideosAndArticlesWrapper">
                    <div className="resourceVideoWrapper">
                        <div className="resourceVideo">
                            <div className="resourceVideoContent">
                                <div className="videoThumbnail">

                                </div>
                                <div className="videoTitleAndDescription">
                                    <div className="videoTitle">
                                        <span>I promise you'll BREAK 90 using these simple golf tips!</span>
                                    </div>
                                    <div className="videoDescription">
                                        <span>How to BREAK 90 - 3 REALLY simple golf tips</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resourceArticleWrapper">
                        <div className="resourceArticle">
                            <div className="articleImage" style={{background: "url('https://theleftrough.com/wp-content/uploads/2019/12/Golf-Tips-for-Beginners-1-1024x544.jpg')"}}>

                            </div>
                            <div className="articleTitleAndDescription">
                                <div className="articleTitle">
                                    <h2>Legit Golf Advice: 10 Golf Tips That Actually Help</h2>
                                </div>
                                <div className="articleDescription">
                                    <p>
                                    If you’re like most golfers, you’re always looking for more golf tips to improve your game and shoot lower scores. 
                                    In this post, I want to share the 10 best golf tips for beginners so that you can speed up success. I’m confident these methods will help you have more fun and play better golf. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resourceArticleWrapper">
                        <div className="resourceArticle">
                            <div className="articleImage" style={{background: "url('https://www.golfinfluence.com/wp-content/uploads/2017/11/new_size-min.png')"}}>

                            </div>
                            <div className="articleTitleAndDescription">
                                <div className="articleTitle">
                                    <h2>Definitive Guide: The Best Golf Tips Of All Time</h2>
                                </div>
                                <div className="articleDescription">
                                    <p>
                                    As a seasoned golf coach, I realized that a lot of amateurs make the same mistake over and over again.
                                    The sad thing is, these mistakes can actually be fixed if one is given the right pointers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="improvementResources">
                <div className="resourceCircleWrapper">
                    <div className="resourceCircle" style={{background: "url('https://www.gerbenlaw.com/wp-content/uploads/2020/07/pga-e1593624879976.png')"}}></div>
                    <div className="resourceCircle" style={{background: "url('https://yt3.ggpht.com/ytc/AKedOLT1fsdjZ8nRP4mCLnKr8PaXddbE0z9nOdI78vrgig=s900-c-k-c0x00ffffff-no-rj')"}}></div>
                    <div className="resourceCircle" style={{background: "url('https://yt3.ggpht.com/ytc/AKedOLTV3TovlgQPlHCnJdH9TW-QRQaPtUFb6Ybf_OX5NQ=s176-c-k-c0x00ffffff-no-rj-mo')"}}></div>
                    <div className="resourceCircle" style={{background: "url('https://yt3.ggpht.com/ytc/AKedOLRNihnZOPadWYAOCen3LKuQst0VTqxTPjs4cqNDOg=s176-c-k-c0x00ffffff-no-rj-mo')"}}></div>
                    <div className="resourceCircle" style={{background: "url('https://yt3.ggpht.com/cdsgvs21aXXVv-62HhJuaf8vpRsKlv9lKCFZmx9nXned46LI8_X01FLgAUCSxMCbz33XJm3xFQ=s176-c-k-c0x00ffffff-no-rj-mo')"}}></div>
                    <div className="resourceCircle6" style={{background: "url('https://theleftrough.com/wp-content/uploads/2017/05/Converted-PNG-449x96.png')"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Improve;