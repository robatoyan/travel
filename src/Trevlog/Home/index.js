import { Left_H } from './Left_H';
import { Right_H } from './Right_H';
import './style.css';

export const Home = () => {
    return (
        <div className='Home' id="Home">
            <Left_H />
            <Right_H />
            <img src='imgHome/map.jpg' className='MapImg' />
        </div>
    )
}