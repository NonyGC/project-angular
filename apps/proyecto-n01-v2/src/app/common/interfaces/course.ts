export interface Course {
  id: number;
  img: string;
  title: string;
  description?: string;
  courseDescriptionItems?: CourseDescriptionItem[];
}

export interface CourseDescriptionItem {
  icon: string;
  title: string;
  description: string;
}
