import { createClient } from '@supabase/supabase-js';

// 環境変数から Supabase の URL とキーを取得
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);