import './styles.css'
import { useState } from 'react'

export default function app() {
  const [flashCard, setFlashCard] = useState({
    question: 'React nedir?',
    choices: ["JavaScript framework'ü", 'JavaScript kütüphanesi'],
    answer: 'JavaScript kütüphanesi.',
    explanation: `Birinin framework diyebilme cüretini gösterdiğini duyarsanız, onu mümkün olduğunca bilgili bir şekilde düzeltmeniz, tercihen yanıtınıza " aslında..." diye başlamanız önemlidir.`,
  })

  /* Challenge: 

    Flashcard'ın ileri geri çevrilmesi gerekiyor. Göreviniz bunu aşağıdaki gibi ayarlamaktır: 
    
        1. Kullanıcı Flashcard'a tıkladığında, 32. satırda className'i "flash-card" olan div'e "flipped" CSS class'ı eklenmelidir. 
           
        2. Kullanıcı Flashcard'a tekrar tıklarsa, "flipped" class'ı div'den kaldırılmalıdır. 
           
        3. Aynı kalıp sonraki tıklamalar için de tekrarlanmalıdır, böylece kullanıcı kartı istediği kadar ileri geri çevirmeye devam edebilir. 
*/
const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(prev => !prev)
  }

  return (
    <div>
      <header>
        <img src='./images/react.svg' />
        <h1> React Çalışma Arkadaşım </h1>
      </header>

      {/* Flashcard'ı tıklanabilir hale getirdik */}
      <div
        className={`flash-card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        <div className='flash-card-inner'>
          <div className='flash-card-front'>
            <p className='question'>{flashCard.question}</p>
            <ol type='a'>
              {flashCard.choices.map((choice) => (
                <li key={crypto.randomUUID()}>{choice}</li>
              ))}
            </ol>
          </div>
          <div className='flash-card-back'>
            <p className='answer'>{flashCard.answer}</p>
            <p>{flashCard.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}