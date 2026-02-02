-- Add explicit RLS policies for rate_limits table
-- This table is accessed only by edge functions using service_role key (which bypasses RLS)
-- These policies explicitly deny all client-side access for documentation and security clarity

-- Policy to deny SELECT for anonymous users
CREATE POLICY "Deny anonymous select on rate_limits" 
ON public.rate_limits 
FOR SELECT 
TO anon
USING (false);

-- Policy to deny INSERT for anonymous users
CREATE POLICY "Deny anonymous insert on rate_limits" 
ON public.rate_limits 
FOR INSERT 
TO anon
WITH CHECK (false);

-- Policy to deny UPDATE for anonymous users
CREATE POLICY "Deny anonymous update on rate_limits" 
ON public.rate_limits 
FOR UPDATE 
TO anon
USING (false);

-- Policy to deny DELETE for anonymous users
CREATE POLICY "Deny anonymous delete on rate_limits" 
ON public.rate_limits 
FOR DELETE 
TO anon
USING (false);

-- Policy to deny SELECT for authenticated users (not needed client-side)
CREATE POLICY "Deny authenticated select on rate_limits" 
ON public.rate_limits 
FOR SELECT 
TO authenticated
USING (false);

-- Policy to deny INSERT for authenticated users
CREATE POLICY "Deny authenticated insert on rate_limits" 
ON public.rate_limits 
FOR INSERT 
TO authenticated
WITH CHECK (false);

-- Policy to deny UPDATE for authenticated users
CREATE POLICY "Deny authenticated update on rate_limits" 
ON public.rate_limits 
FOR UPDATE 
TO authenticated
USING (false);

-- Policy to deny DELETE for authenticated users
CREATE POLICY "Deny authenticated delete on rate_limits" 
ON public.rate_limits 
FOR DELETE 
TO authenticated
USING (false);