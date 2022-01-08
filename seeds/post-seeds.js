const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Nunc purus.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Pellentesque eget nunc.',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Donec dapibus.',
    post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Nulla tellus.',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Etiam justo.',
    post_url: 'https://shareasale.com/quis.json',
    user_id: 4,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6,
    content: "Donec posuere metus vitae ipsum."
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_url: 'https://java.com/at/nibh/in.png',
    user_id: 7,
    content: "Donec posuere metus vitae ipsum."
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
