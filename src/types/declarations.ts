export interface IRepositoryInfo {
   id: number;
   name: string;
   full_name: string;
   url: string;
   description: string;
   html_url: string;
   owner: {
      avatar_url: string;
   }
   stargazers_count: number;
   forks_count: number;
   open_issues_count: number;
   watchers: number;
}
