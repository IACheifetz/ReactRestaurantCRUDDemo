import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });
  
  return response.user;
}

export async function logout() {
  await client.auth.signOut();
  
  return window.location.href = '../';
}

export async function createRestaurant(restaurant){
  const response = await client
    .from('Restaurants')
    .insert([restaurant]);
  
  return checkError(response);
}

export async function updateRestaurant(restaurant){
  const response = await client
    .from('Restaurants')
    .update([restaurant]);
  
  return checkError(response);
}

export async function getRestaurants(){
  const response = await client
    .from('Restaurants')
    .select();
    
  return checkError(response);
}

export async function getRestaurantById(id){
  const response = await client
    .from('Restaurants')
    .select()
    .match({ id })
    .single();
      
  return checkError(response);
}