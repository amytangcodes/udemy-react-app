import faker from 'faker';


export const data = [
  {
    author: "Sam",
    date: "Aug 3",
    text: "Lorem ipsum",
    avatar: faker.image.avatar()
  },
  {
    author: "Bart",
    date: "Aug 28",
    text: "Lorem ipsum stuff",
    avatar: faker.image.avatar()
  },
  {
    author: "Cathy",
    date: "April 28",
    text: "Lorem ipsum stuff more stuff",
    avatar: faker.image.avatar()
  }
]