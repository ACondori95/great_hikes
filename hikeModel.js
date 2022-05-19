// normally the model would have more going on... retrieving the hikes from a database, filtering, etc. Our model will be very simple. We would simply export the hikesList, but a better pattern would be to create a 'getter' function to do it instead. That way as our model changed... we could simply change the getter function and anything using it should be able to remain the same
const hikeList = [
  {
    name: 'Bechler Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description: 'Beautiful short hike along the Bechelr river to Bechler Falls',
    directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow the road for a few miles then turn left again unto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    name: 'Teton Canyon',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description: 'Beautiful short hike along the Bechelr river to Bechler Falls',
    directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow the road for a few miles then turn left again unto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    name: 'Denanda Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description: 'Beautiful short hike along the Bechelr river to Bechler Falls',
    directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow the road for a few miles then turn left again unto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  }
];
class HikeModel {
  getAllHikes() {
    return hikeList;
  }

  getHikeByName(name) {
    return hikeList.find(hike => hike.name === name);
  }
}

export default HikeModel;