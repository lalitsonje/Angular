import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor() {}
  getAll = () => {
    return [
      {
        $key: "Angular",
        name: "Angular",
      },
      {
        $key: "Javascript",
        name: "Javascript",
      },
      {
        $key: "Node",
        name: "Node",
      },
      {
        $key: "Java",
        name: "Java",
      },
      {
        $key: "React",
        name: "React",
      },
    ];
  };
}
