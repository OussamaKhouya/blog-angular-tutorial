export class BlogPost {
  id: bigint;
  dateCreated: string;
  updateUpdate: string;
  title: string;
  preview: string;
  content: string;
  constructor(id: bigint, dateCreated: string, updateUpdate: string, title: string, preview: string, content: string) {
    this.id = id;
    this.dateCreated = dateCreated;
    this.updateUpdate = updateUpdate;
    this.title = title;
    this.preview = preview;
    this.content = content;
  }
}
