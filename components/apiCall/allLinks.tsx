//animal data list
export const ANIMALS={
    URL:'https://api.publicapis.org/entries',
    METHOD:'GET'
}
//dog image get
export const IMAGE={
    URL:'https://dog.ceo/api/breeds/image/random',
    METHOD:'GET'
}
export const MEMES={
    URL:'https://api.imgflip.com/get_memes',
    METHOD:'GET'
}
export const BASIC_DETAILS_POST_DATA={
    URL:'https://us-central1-ilttesting.cloudfunctions.net/ashan_form_submit',
    METHOD:'POST',
}
export const BASIC_DETAILS_GET_DATA={
    URL:'https://us-central1-ilttesting.cloudfunctions.net/ashan_form_getData',
    METHOD:'GET',
}
export const USER_SIGNUP={
    URL:'https://us-central1-ilttesting.cloudfunctions.net/ashan_user_signup',
    METHOD:'POST',
}
// export const UPLOAD_IMAGE='https://us-central1-ilttesting.cloudfunctions.net/ashan_file_upload'

export const USER_SIGNIN={
    URL:'https://us-central1-ilttesting.cloudfunctions.net/ashan_user_signin',
    METHOD:'POST'
}
export const FEEDBACK={
    URL:'127.0.0.1',
    METHOD:'POST'
}
export const FILE_UPLOAD={
    URL:'https://us-central1-ilttesting.cloudfunctions.net/ashan_file_upload',
    METHOD:'POST'
}

export const CRUD={
    URL:'https://us-central1-ilttesting.cloudfunctions.net/ashan_CRUD',
    METHOD:{
        G:'GET',
        P:'POST',
        PU:'PUT',
        D:'DELETE'
    }
}
export const USER_SIGN_OUT={
    URL:'https://us-central1-ilttesting.cloudfunctions.net/ashan_signOut',
    METHOD:'POST'
}