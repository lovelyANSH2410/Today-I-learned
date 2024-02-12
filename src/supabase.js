import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ianhvyvsuohmcxlpqdkc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlhbmh2eXZzdW9obWN4bHBxZGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0ODEzOTcsImV4cCI6MTk5MjA1NzM5N30._O1LFr5capziDeyZPD2N0IM9kSdjGokHbwtcaUq1eLc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
