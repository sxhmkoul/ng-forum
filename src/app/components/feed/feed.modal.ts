export interface feedModal {
    id: string,
    category: string,
    dpUrl: string, 
    name: string, 
    work: string, 
    timeStamp: string, 
    question: string, 
    desc: string,
    liked: boolean,
    comments: comments[]
}

export interface comments {
    user_id: number, 
    user_name: string, 
    comment: string
}