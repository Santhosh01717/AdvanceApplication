import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pht from '../images/img-1.jpg';
import Nav from './Nav1';
import AdminSidebar from './AdminSidebar';
function Cards() {
  return (
    <>
    <AdminSidebar />
    <div className='cards'>
      <h1>Check out these Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600"
              text='We specialize in crafting bespoke corporate events tailored to your companys unique culture, objectives, and audience. From large-scale conferences to intimate team-building retreats, we ensure every detail reflects your brand identity and resonates with your attendees.'
              // label='Two Wheeler'
              // path='/twowheelerloan'
            />
            <CardItem
              src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600"
              text='Our expert event management team handles every aspect of planning and executing corporate events with precision and professionalism. From venue selection and logistics coordination to program development and on-site management, we ensure a seamless experience from start to finish.'
              // label='Car'
              // path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="https://images.pexels.com/photos/348517/pexels-photo-348517.jpeg?auto=compress&cs=tinysrgb&w=600"
              text='We leverage cutting-edge technology and creative strategies to deliver engaging and interactive corporate events that leave a lasting impression. Whether its incorporating virtual elements, gamification, or experiential activations, we keep attendees captivated and connected throughout the event.'
              // label='Tractor'
              // path='/tractorloan'
            />
            <CardItem
              src="https://images.pexels.com/photos/7648505/pexels-photo-7648505.jpeg?auto=compress&cs=tinysrgb&w=600"
              text='We understand the importance of measurable results and strive to maximize the return on investment (ROI) for every corporate event. Through strategic planning, data-driven insights, and post-event analysis, we help you achieve your business objectives and drive tangible outcomes.'
              // label='Used Car'
              // path='/products'
            />
            <CardItem
              src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600"
              text='With a network of trusted partners and vendors worldwide, we have the capability to execute corporate events of any scale and complexity, no matter where your business takes you. Our local expertise ensures seamless operations and cultural sensitivity in any location.'
              // label='Commercial car'
              // path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;