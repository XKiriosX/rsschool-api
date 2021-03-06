import { User } from './user';
import { Feedback } from './feedback';
import { Course } from './course';
import { Task } from './task';
import { TaskResult } from './taskResult';
import { CourseTask } from './courseTask';
import { Student } from './student';
import { Mentor } from './mentor';
import { Stage } from './stage';

export * from './session';

export const models = [Stage, Mentor, Student, User, Feedback, Course, Task, TaskResult, CourseTask];

export { User, Feedback, CourseTask, Course, Task, Student, Mentor, TaskResult };

export interface IApiResponse<T> {
  data: T | T[] | null;
}
