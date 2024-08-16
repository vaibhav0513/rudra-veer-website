import React from 'react'


const memberList = [
  {
    name: 'शुभम गाडगे',
    img: '/teamMemberThree.jpg',
    alternate: 'teamOneImg',
    description: 'संस्थापक अध्यक्ष रुद्रवीर प्रतिष्ठान',
    features: [
      'Event Management',
      '+91 8080301618',
    ],
  },
  {
    name: 'प्रशांत मोहिते',
    img: '/teamMemberTwo.jpg',
    alternate: 'teamOneImg',
    description: 'कार्यवाहक',
    features: [
      'Event Coordinator',
      '+91 9702032730',
    ],
    
  },
  {
    name: 'अक्षय शिर्के',
    img: '/teamMemberThree.png',
    alternate: 'teamOneImg',
    description: 'खजिनदार',
    features: [
      'Fundraising',
      '+91 8291011850',
    ],
  },
  // {
  //   name: 'Mahesh Jadhav',
  //   img: '/teamMemberThree.jpg',
  //   alternate: 'teamOneImg',
  //   description: 'Director of RudraVeer Pratishtan',
  // features: [
  //   'all the best',
  //   'Access to expert webinars',
  //   'Access to expert webinars',
  // '102*******',
  // ],
    
  // },
]
const MeetOurMember = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior:"smooth",
      })
    }
  }

  return (
    // pt-32 
    <div id='members' className=' bg-para py-12 pt-32'>
      <div 
        className='container mx-auto px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg mb-3'>Meet Our Members</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>
            Help today because tomorrow you may be the one who needs more helping!
          </p>
        </div>

        {/* members  gap-8*/}
        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12'>
          {
            memberList.map((data,index) => (
              <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
                <img src={data.img} alt={data.alternate} width={180}/>
                <h3 className='text-2xl pt-2 font-semibold mb-4'>{data.name}</h3>
                <hr className='w-24 border text-primary border-primary'/>
                <p className='text-l font-bold mb-4 pt-2 text-gray-400'>{data.description}</p>

                <ul className='list-disc list-inside space-y-2 mb-6'>
                  {
                    data.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))
                  }
                </ul>

                {/* <button 
                  onClick={handleScrollToContact}
                  className='bg-primary text-white px-4 py-2 rounded'>
                    Get Started
                </button> */}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MeetOurMember
