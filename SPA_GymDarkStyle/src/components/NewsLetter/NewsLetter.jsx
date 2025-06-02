import { ContainerNewsLetter } from './NewsLetterStyled'

export default function NewsLetter() {
  return (
    <ContainerNewsLetter>
        <h1>
            Get Exclusive Offers On Your Email
        </h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </ContainerNewsLetter>
  )
}
