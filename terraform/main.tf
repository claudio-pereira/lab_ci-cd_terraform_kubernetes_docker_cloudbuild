resource "google_container_cluster" "my_autopilot_cluster" {
  name     = "lab01"
  location = "us-west1" # or your desired region
  enable_autopilot = true
}