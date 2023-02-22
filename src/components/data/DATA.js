const drivers = [
  {
    name: 'John Doe',
    driverId: 2567890,
    distance: 1.8,
    img: require('../../assets/images/user.png'),
    rating: 3.7,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'Guy Hawkins',
    driverId: 2567891,
    distance: 1.8,
    img: require('../../assets/images/user2.png'),
    rating: 3.5,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'Arlene McCoy',
    driverId: 2567892,
    distance: 1.8,
    img: require('../../assets/images/user3.png'),
    rating: 3.9,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'Marvin McKinney',
    driverId: 2567893,
    distance: 1.8,
    img: require('../../assets/images/user4.png'),
    rating: 4.6,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'Albert Flores',
    driverId: 2567894,
    distance: 1.8,
    img: require('../../assets/images/user5.png'),
    rating: 4.1,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'Kathryn Murphy',
    driverId: 2567895,
    distance: 1.8,
    img: require('../../assets/images/user1.png'),
    rating: 4.5,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'Leslie Alexander',
    driverId: 2567896,
    distance: 1.8,
    img: require('../../assets/images/user.png'),
    rating: 4.2,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'Santosh Kumar',
    driverId: 2567897,
    distance: 1.8,
    img: require('../../assets/images/user1.png'),
    rating: 4.9,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'Brock Siman',
    driverId: 2567898,
    distance: 1.8,
    img: require('../../assets/images/user.png'),
    rating: 4.2,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
  {
    name: 'John Sina',
    driverId: 2567899,
    distance: 1.8,
    img: require('../../assets/images/user1.png'),
    rating: 4.8,
    exp: 6,
    charge: 100,
    desc: 'Hello to all my Happy clients, I am Rahul Jain and I have 1 year experience in machanics. I have fixed a lot of branded cars. Customers have great trust on me. The prices are great and very affordable so just try once. Thank you',
    location: '',
    phoneNum: '9822544067',
  },
];

const CustomerRating = [
  {
    id: 1,
    name: 'Vishal Chaurasiya',
    img: require('../../assets/images/user5.png'),
    rating: 4.2,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.',
  },
  {
    id: 2,
    name: 'Rohit Barate',
    img: require('../../assets/images/user5.png'),
    rating: 4.9,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.',
  },
  {
    id: 4,
    name: 'saurabh More',
    img: require('../../assets/images/user5.png'),
    rating: 3.9,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.',
  },
  {
    id: 5,
    name: 'Rajesh Shinde',
    img: require('../../assets/images/user5.png'),
    rating: 3.7,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.',
  },
];
const vehicleTypes = [
  {
    id: 2,
    name: 'Bike',
    img: 'https://cdni.iconscout.com/illustration/premium/thumb/bike-3176649-2666324.png',
  },
  {
    id: 3,
    name: 'car (sedan)',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/car-4454426-3692778.png',
  },
  {
    id: 4,
    name: 'car (suv)',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/jeep-4522189-3860856.png',
  },
  {
    id: 5,
    name: 'small truck',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/pickup-van-6851103-5619093.png',
  },
  {
    id: 6,
    name: 'truck',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/truck-5349020-4479021.png',
  },
  {
    id: 7,
    name: 'construction vehicle',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/excavator-5371149-4486746.png',
  },
  {
    id: 8,
    name: 'tractor',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/tractor-4522200-3860851.png',
  },
  {
    id: 9,
    name: 'heavy vehicle',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/mining-vehicle-5371182-4486739.png',
  },
  {
    id: 10,
    name: 'bus',
    img: 'https://cdn3d.iconscout.com/3d/premium/thumb/bus-5796461-4844858.png',
  },
];

const serviceTypes = [
  {
    id: 1,
    name: 'Towing service',
    img: require('../../assets/images/towicon.png'),
    screen: 'Towing Service',
  },
  {
    id: 2,
    name: 'Cleaning Services',
    img: require('../../assets/images/washicon.png'),
    screen: 'Cleaning Services',
  },
  {
    id: 3,
    name: 'Tyres and Wheel Care ',
    img: require('../../assets/images/repicon.png'),
  },
  {
    id: 4,
    name: 'AC Service and Repair',
    img: require('../../assets/images/acrepicon.png'),
  },
  {
    id: 5,
    name: 'Denting and Painting',
    img: require('../../assets/images/coloricon.png'),
  },
  {
    id: 6,
    name: 'Body Repairs',
    img: require('../../assets/images/brepairricon.png'),
  },
  {
    id: 7,
    name: 'Vehicle Service ',
    img: require('../../assets/images/serviceicon.png'),
  },
];

//  offers array
const offers = [
  '30% Off on Cleaning Services',
  '20% less on Cleaning Services',
  '50% Off on Cleaning Services',
];

//cleaning services array
const CleaningServicesData = [
  {
    id: 1,
    serviceName: 'Normal Wash',
    img: require('../../assets/images/normalwash.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi, sed magna dictumst faucibus at morbi. Hac mattis faucibus erat ut enim.',
    price: 1000,
    offerPrice: 800,
    isTrending: false,
    time: 3,
    warranty: 1,
    offForMember: 10,
    FAQ: [
      {
        que: 'How this service is going to affect my vehicle condition?',
        ans: 'The following terms and conditions, together with any referenced documents form a legal agreement between you and your employer, employees,agents, contractors and any other entity on whose behalf you accept these terms',
      },
      {
        que: 'Why should I choose this service?',
        ans: 'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users,what kind of personal data you collect and what you do with that data.',
      },
    ],
  },
  {
    id: 2,
    serviceName: 'Denting and Painting',
    img: require('../../assets/images/deepwash.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi, sed magna dictumst faucibus at morbi. Hac mattis faucibus erat ut enim.',
    price: 1000,
    offerPrice: 800,
    isTrending: true,
    time: 2,
    warranty: 1,
    offForMember: 10,
    FAQ: [
      {
        que: 'What is the payment method?',
        ans: 'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
      },
      {
        que: 'What if cleaning is not done properly?',
        ans: 'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
      },
    ],
  },
  {
    id: 3,
    serviceName: 'Deep Cleaning',
    img: require('../../assets/images/normalwash.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi, sed magna dictumst faucibus at morbi. Hac mattis faucibus erat ut enim.',
    price: 1500,
    offerPrice: 1200,
    isTrending: true,
    time: 5,
    warranty: 1,
    offForMember: 10,
    FAQ: [
      {
        que: 'What is the payment method?',
        ans: 'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
      },
      {
        que: 'What if cleaning is not done properly?',
        ans: 'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
      },
      {
        que: 'How can Premium Members avail the discount offers?',
        ans: 'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
      },
    ],
  },
];

// fQA data
const FAQs = [
  {
    que: 'How this service is going to affect my vehicle condition?',
    ans: 'The following terms and conditions, together with any referenced documents form a legal agreement between you and your employer, employees,agents, contractors and any other entity on whose behalf you accept these terms',
  },
  {
    que: 'Why should I choose this service?',
    ans: 'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users,what kind of personal data you collect and what you do with that data.',
  },
  {
    que: 'What is the payment method?',
    ans: 'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
  {
    que: 'What if cleaning is not done properly?',
    ans: 'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
  {
    que: 'How can Premium Members avail the discount offers?',
    ans: 'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
];
const profileOptions = [
  {
    id: 1,
    option: 'My Account',
    co_options: 'Favourites, Offers & Settings',
  },
  {
    id: 2,
    option: 'Addresses',
    co_options: 'Share, Edit & Add New Addressess',
  },
  {
    id: 3,
    option: 'My Orders',
    co_options: 'View All Orders and  History',
  },
  {
    id: 4,
    option: 'HM Store Money',
    co_options: 'View Account Balance & Transaction History',
  },
  {
    id: 5,
    option: 'Payments And Refunds',
    co_options: 'Refunds Status & Payments Modes',
  },
  {
    id: 6,
    option: 'Help',
    co_options: 'FAQs & Links',
  },
];

const bookings = [
  {
    name: 'John Doe',
    bookingId:15014520,
    serProvId: 2567890,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'cancelled',
  },
  {
    name: 'Guy Hawkins',
    bookingId:15014529,
    serProvId: 2567891,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    bill: 500,
    status: 'cancelled',
  },
  {
    name: 'Arlene McCoy',
    bookingId:15014528,
    serProvId: 2567892,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'completed',
  },
  {
    name: 'Marvin McKinney',
    bookingId:15014527,
    serProvId: 2567893,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'cancelled',
  },
  {
    name: 'Albert Flores',
    bookingId:15014526,
    serProvId: 2567894,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'completed',
  },
  {
    name: 'Kartik Murphy',
    bookingId:15014524,
    serProvId: 2567895,
    distance: 1.8,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'pending',
  },
  {
    name: 'Leslie Alexander',
    bookingId:15014522,
    serProvId: 2567896,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'cancelled',
  },
  {
    name: 'Santosh Kumar',
    bookingId:15014525,
    serProvId: 2567897,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'pending',
  },
  {
    name: 'Brock Siman',
    bookingId:1501452,
    serProvId: 2567898,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'completed',
  },
  {
    name: 'John Sina',
    bookingId:150145225,
    serProvId: 2567899,
    img: require('../../assets/images/user.png'),
    bill: 1200,
    createdTime: '10/10/2020',
    completeTime: '11/10/2020',
    status: 'cancelled',
  },
];

export {
  drivers,
  CustomerRating,
  vehicleTypes,
  serviceTypes,
  offers,
  CleaningServicesData,
  profileOptions,
  bookings,
};
