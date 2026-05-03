-- Allows admins to delete any profile except their own.
-- Deleting a profile cascades to remove all their signups and comments.
DROP POLICY IF EXISTS "profiles: admin delete" ON profiles;
CREATE POLICY "profiles: admin delete"
  ON profiles FOR DELETE TO authenticated
  USING (is_admin() AND id != auth.uid());
