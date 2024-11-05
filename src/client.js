import { createClient } from '@supabase/supabase-js';

const URL = 'https://gosxbynxweyxdcyqhrth.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvc3hieW54d2V5eGRjeXFocnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3Njc2MzYsImV4cCI6MjA0NjM0MzYzNn0.IAWos1Bn7rCan6QKUOWGvxUyeJgVGJas5-2a92zEzkA';

export const supabase = createClient(URL, API_KEY);