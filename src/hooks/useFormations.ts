import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Domain {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string;
  color: string | null;
  display_order: number;
}

export interface Sector {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string;
  display_order: number;
}

export interface Formation {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  description: string | null;
  domain_id: string;
  duration: string | null;
  price: number | null;
  cpf_eligible: boolean;
  certification: string | null;
  level: string | null;
  format: string | null;
  image_url: string | null;
  is_published: boolean;
  display_order: number;
  domains?: Domain;
}

export const useDomains = () => {
  return useQuery({
    queryKey: ["domains"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("domains")
        .select("*")
        .order("display_order");
      if (error) throw error;
      return data as Domain[];
    },
  });
};

export const useSectors = () => {
  return useQuery({
    queryKey: ["sectors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sectors")
        .select("*")
        .order("display_order");
      if (error) throw error;
      return data as Sector[];
    },
  });
};

export const useFormations = (domainSlug?: string) => {
  return useQuery({
    queryKey: ["formations", domainSlug],
    queryFn: async () => {
      let query = supabase
        .from("formations")
        .select("*, domains(*)")
        .eq("is_published", true)
        .order("display_order");

      if (domainSlug) {
        const { data: domain } = await supabase
          .from("domains")
          .select("id")
          .eq("slug", domainSlug)
          .single();
        if (domain) {
          query = query.eq("domain_id", domain.id);
        }
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Formation[];
    },
  });
};
