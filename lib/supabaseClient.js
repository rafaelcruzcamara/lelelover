import { createClient } from "@supabase/supabase-js";

// Se as variáveis de ambiente não estiverem configuradas (esquecidas no
// GitHub Actions, por exemplo), usa um placeholder em vez de deixar o
// `createClient` derrubar o build inteiro — a enquete/recados/contador só
// não vão funcionar até as variáveis reais serem configuradas.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
