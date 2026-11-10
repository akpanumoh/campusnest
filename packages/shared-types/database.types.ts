
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  
  "graphql_public": {
          Tables: {
            [_ in never]: never
          }
          Views: {
            [_ in never]: never
          }
          Functions: {
            "graphql":
{ Args: { "extensions"?: Json,"operationName"?: string,"query"?: string,"variables"?: Json }; Returns: Json
                           }
          }
          Enums: {
            [_ in never]: never
          }
          CompositeTypes: {
            [_ in never]: never
          }
        },"public": {
          Tables: {
            "conversation_participants": {
                  Row: {
                    "conversation_id": string,"joined_at": string,"user_id": string
                  }
                  ComputedFields: never
                  Insert: {
                    "conversation_id": string,"joined_at"?: string,"user_id": string
                  }
                  Update: {
                    "conversation_id"?: string,"joined_at"?: string,"user_id"?: string
                  }
                  Relationships: [
                    {
      foreignKeyName: "conversation_participants_conversation_id_fkey"
      columns: ["conversation_id"]
isOneToOne: false
      referencedRelation: "conversations"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "conversation_participants_user_id_fkey"
      columns: ["user_id"]
isOneToOne: false
      referencedRelation: "profiles"
      referencedColumns: ["id"]
    }
                  ]
                },"conversations": {
                  Row: {
                    "created_at": string,"id": string,"listing_id": string | null,"roommate_post_id": string | null
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"id"?: string,"listing_id"?: string | null,"roommate_post_id"?: string | null
                  }
                  Update: {
                    "created_at"?: string,"id"?: string,"listing_id"?: string | null,"roommate_post_id"?: string | null
                  }
                  Relationships: [
                    {
      foreignKeyName: "conversations_listing_id_fkey"
      columns: ["listing_id"]
isOneToOne: false
      referencedRelation: "listings"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "conversations_roommate_post_id_fkey"
      columns: ["roommate_post_id"]
isOneToOne: false
      referencedRelation: "roommate_posts"
      referencedColumns: ["id"]
    }
                  ]
                },"listing_images": {
                  Row: {
                    "id": string,"image_url": string,"listing_id": string,"position": number
                  }
                  ComputedFields: never
                  Insert: {
                    "id"?: string,"image_url": string,"listing_id": string,"position"?: number
                  }
                  Update: {
                    "id"?: string,"image_url"?: string,"listing_id"?: string,"position"?: number
                  }
                  Relationships: [
                    {
      foreignKeyName: "listing_images_listing_id_fkey"
      columns: ["listing_id"]
isOneToOne: false
      referencedRelation: "listings"
      referencedColumns: ["id"]
    }
                  ]
                },"listings": {
                  Row: {
                    "created_at": string,"description": string | null,"id": string,"latitude": number | null,"location_text": string,"longitude": number | null,"owner_contact": string | null,"owner_name": string | null,"posted_by_id": string,"price": number,"price_period": Database["public"]['Enums']["price_period"],"room_type": Database["public"]['Enums']["room_type"],"status": Database["public"]['Enums']["listing_status"],"title": string
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"description"?: string | null,"id"?: string,"latitude"?: number | null,"location_text": string,"longitude"?: number | null,"owner_contact"?: string | null,"owner_name"?: string | null,"posted_by_id": string,"price": number,"price_period"?: Database["public"]['Enums']["price_period"],"room_type": Database["public"]['Enums']["room_type"],"status"?: Database["public"]['Enums']["listing_status"],"title": string
                  }
                  Update: {
                    "created_at"?: string,"description"?: string | null,"id"?: string,"latitude"?: number | null,"location_text"?: string,"longitude"?: number | null,"owner_contact"?: string | null,"owner_name"?: string | null,"posted_by_id"?: string,"price"?: number,"price_period"?: Database["public"]['Enums']["price_period"],"room_type"?: Database["public"]['Enums']["room_type"],"status"?: Database["public"]['Enums']["listing_status"],"title"?: string
                  }
                  Relationships: [
                    {
      foreignKeyName: "listings_posted_by_id_fkey"
      columns: ["posted_by_id"]
isOneToOne: false
      referencedRelation: "profiles"
      referencedColumns: ["id"]
    }
                  ]
                },"messages": {
                  Row: {
                    "content": string,"conversation_id": string,"created_at": string,"id": string,"read_at": string | null,"sender_id": string
                  }
                  ComputedFields: never
                  Insert: {
                    "content": string,"conversation_id": string,"created_at"?: string,"id"?: string,"read_at"?: string | null,"sender_id": string
                  }
                  Update: {
                    "content"?: string,"conversation_id"?: string,"created_at"?: string,"id"?: string,"read_at"?: string | null,"sender_id"?: string
                  }
                  Relationships: [
                    {
      foreignKeyName: "messages_conversation_id_fkey"
      columns: ["conversation_id"]
isOneToOne: false
      referencedRelation: "conversations"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "messages_sender_id_fkey"
      columns: ["sender_id"]
isOneToOne: false
      referencedRelation: "profiles"
      referencedColumns: ["id"]
    }
                  ]
                },"profiles": {
                  Row: {
                    "created_at": string,"default_dashboard": Database["public"]['Enums']["dashboard_type"],"first_name": string,"id": string,"last_name": string
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"default_dashboard"?: Database["public"]['Enums']["dashboard_type"],"first_name": string,"id": string,"last_name": string
                  }
                  Update: {
                    "created_at"?: string,"default_dashboard"?: Database["public"]['Enums']["dashboard_type"],"first_name"?: string,"id"?: string,"last_name"?: string
                  }
                  Relationships: [
                    
                  ]
                },"roommate_posts": {
                  Row: {
                    "author_id": string,"created_at": string,"description": string,"id": string,"listing_id": string | null,"type": Database["public"]['Enums']["roommate_post_type"]
                  }
                  ComputedFields: never
                  Insert: {
                    "author_id": string,"created_at"?: string,"description": string,"id"?: string,"listing_id"?: string | null,"type": Database["public"]['Enums']["roommate_post_type"]
                  }
                  Update: {
                    "author_id"?: string,"created_at"?: string,"description"?: string,"id"?: string,"listing_id"?: string | null,"type"?: Database["public"]['Enums']["roommate_post_type"]
                  }
                  Relationships: [
                    {
      foreignKeyName: "roommate_posts_author_id_fkey"
      columns: ["author_id"]
isOneToOne: false
      referencedRelation: "profiles"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "roommate_posts_listing_id_fkey"
      columns: ["listing_id"]
isOneToOne: false
      referencedRelation: "listings"
      referencedColumns: ["id"]
    }
                  ]
                }
          }
          Views: {
            [_ in never]: never
          }
          Functions: {
            [_ in never]: never
          }
          Enums: {
            "dashboard_type": "student"|"landlord","listing_status": "available"|"taken","price_period": "monthly"|"yearly","room_type": "self_contain"|"shared"|"hostel","roommate_post_type": "have_spot"|"looking_for_spot"
          }
          CompositeTypes: {
            [_ in never]: never
          }
        }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  "graphql_public": {
          Enums: {
            
          }
        },"public": {
          Enums: {
            "dashboard_type": ["student", "landlord"],"listing_status": ["available", "taken"],"price_period": ["monthly", "yearly"],"room_type": ["self_contain", "shared", "hostel"],"roommate_post_type": ["have_spot", "looking_for_spot"]
          }
        }
} as const
