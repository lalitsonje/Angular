import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor() {}
  getAll = () => {
    return [
      {
        bookName: "Angular Book 1",
        category: "Angular",
        author: "Angular",
        description: "Angular",
        url: "/assets/images/AngularBook1.jpg",
        rating: {
          oneStar: 0,
          twoStar: 0,
          threeStar: 0,
          fourStar: 0,
          fiveStar: 0,
        },
        avarageRating: 3,
        price: 45,
      },
      {
        bookName: "Javascript Book",
        category: "Javascript",
        author: "Angular",
        description: "Angular",
        url: "/assets/images/book2.jpg",
        rating: {
          oneStar: 0,
          twoStar: 0,
          threeStar: 0,
          fourStar: 0,
          fiveStar: 0,
        },
        avarageRating: 3,
        price: 45,
      },
      {
        bookName: "Java Book 1",
        category: "Java",
        author: "Angular",
        description: "Angular",
        url: "/assets/images/book2.jpg",
        rating: {
          oneStar: 0,
          twoStar: 0,
          threeStar: 0,
          fourStar: 0,
          fiveStar: 0,
        },
        avarageRating: 3,
        price: 45,
      },
      {
        bookName: "Node Book 1",
        category: "Node",
        author: "Angular",
        description: "Angular",
        url: "/assets/images/book2.jpg",
        rating: {
          oneStar: 0,
          twoStar: 0,
          threeStar: 0,
          fourStar: 0,
          fiveStar: 0,
        },
        avarageRating: 3,
        price: 45,
      },
      {
        bookName: "React Book 1",
        category: "React",
        author: "Angular",
        description: "Angular",
        url: "/assets/images/book2.jpg",
        rating: {
          oneStar: 0,
          twoStar: 0,
          threeStar: 0,
          fourStar: 0,
          fiveStar: 0,
        },
        avarageRating: 3,
        price: 45,
      },
      {
        bookName: "Angular Book 2",
        category: "Angular",
        author: "Angular",
        description: "Angular",
        url: "/assets/images/AngularBook2.jpg",
        rating: {
          oneStar: 0,
          twoStar: 0,
          threeStar: 0,
          fourStar: 0,
          fiveStar: 0,
        },
        avarageRating: 3,
        price: 45,
      },
      {
        bookName: "Angular Book 3",
        category: "Angular",
        author: "Angular",
        description: "Angular",
        url: "/assets/images/AngularBook3.jpg",
        rating: {
          oneStar: 0,
          twoStar: 0,
          threeStar: 0,
          fourStar: 0,
          fiveStar: 0,
        },
        avarageRating: 3,
        price: 45,
      },
    ];
  };
}
