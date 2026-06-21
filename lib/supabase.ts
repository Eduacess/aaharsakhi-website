import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  'https://lifsskumksujtgifctqz.supabase.co';

const supabaseAnonKey =
  'sb_publishable_Ua6FoyKhbpDdvBpZW4XSYA_Pcmph-tV';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);