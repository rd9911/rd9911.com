import Image from 'next/image'
import github_image from '../public/main_content/github.png'
import twitter_image from '../public/main_content/twitter.png'
import linkedin_image from '../public/main_content/linkedin.png'
import telegram_image from '../public/main_content/telegram.png'
import mail_image from '../public/main_content/mail.png'



export default function Home() {
  return (
      <div className='container'>
          <div className='intro'>
            <div className='intro-text'>
              <h3>I am Avazjon Yusufjonov, a philosophy and economics master's student and full-stack developer based in Bayreuth, Germany. Primary technologies that I work with are React.js & Node.js to build web applications, and Numpy & Pandas for data analysis. <br/> You can contact me through:</h3>
              <div>
                <div className='social-links'>
                  <a className='link' type='button' href='https://github.com/rd9911' target='_blank' rel='noreferrer' ><Image src={github_image} alt='github-logo' width={58} height={30} /></a>
                  <a className='link' type='button' href='https://www.linkedin.com/in/avazjonyusufjonov1/' target='_blank' rel='noreferrer' ><Image src={linkedin_image} alt='linkedin-logo' width={30} height={30} /></a>
                  <a className='link' type='button' href='mailto:avazjonyusufjonov@gmail.com' target='_blank' rel='noreferrer' ><Image src={mail_image} alt='mail-logo' width={40} height={30} /></a>
                </div>
              </div>
            </div>
          </div>
      </div>
  ) 
}
