import React, {Component} from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';

const SPEED = 4;

const COL_1 = 'blue';

const COL_2 = 'red';

export default class SortingVisualizer extends Component{
  constructor(props){
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount(){
    this.resetArray();
  }

  resetArray() {
    const array =[];
    for(let i=0; i<320; i++){
      array.push(randomIntFromInterval(5,740));
    }
    this.setState({array});
  }

  // This function visualizes the animations
  mergeSort(){
    const animations = sortingAlgorithms.mergeSort(this.state.array.slice());
    for(let i=0; i<animations.length; i++){
        const arrayBars = document.getElementsByClassName('array-bar');
        let rem = i%3 == 2;
        if(rem){
          const [id, newHeight] = animations[i];
          setTimeout(()=>{
            arrayBars[id].style.height = `${newHeight}px`;
          },i*SPEED);
        }else{
          const [id1, id2] = animations[i];
          const color = i % 3 === 0 ? COL_2 : COL_1;
          setTimeout(()=>{
            arrayBars[id1].style.backgroundColor=color;
            arrayBars[id2].style.backgroundColor=color;
          },i*SPEED);
        }
    }
  }

  heapSort(){}

  bubbleSort(){}

  render(){
    const {array} = this.state;
    return(
      <div className="array-container">
        {array.map((value,idx) => (
            <div className="array-bar" key={idx} style={{height:`${value}px`}}></div>
          ))}
        <div className="button-container">
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button></div>
      </div>
      );
  }
}

// function to generate a random number in an interval #StackOverflow :)
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
