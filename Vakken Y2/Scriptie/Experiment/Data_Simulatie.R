library(dplyr)    # For data manipulation
library(tidyr)    # For pivoting the data
library(ggplot2)

Simulation_clean <- Simulation %>%
  group_by(user_id) %>%
  filter(n() == 2 & any(article_number == "B") & any(article_number %in% c("A1", "A2", "A3", "A4")))

Simulation_paired <- Simulation_clean %>%
  pivot_wider(
    id_cols = user_id,                # Use only user_id as the identifier
    names_from = article_number,      # Spread article_number into columns
    values_from = slider_values       # Fill with slider_values
  ) %>%
  mutate(
    A_version = case_when(
      !is.na(A1) ~ "A1",
      !is.na(A2) ~ "A2",
      !is.na(A3) ~ "A3",
      !is.na(A4) ~ "A4"
    ),
    slider_value_A = coalesce(A1, A2, A3, A4),  # Combine A values, taking the non-NA one
    slider_value_B = B                          # B value is already in its column
  ) %>%
  select(user_id, A_version, slider_value_A, slider_value_B) %>%
  mutate(diff = slider_value_B - slider_value_A)  # Calculate the difference

ggplot(Simulation_paired, aes(x = A_version, y = diff)) +
  geom_point(position = position_jitter(width = 0.2), alpha = 0.6) +
  labs(x = "A Version", 
       y = "Difference in Score (B - A)", 
       title = "Difference in Slider Values Between B and A by Version") +
  theme_minimal()

means <- Simulation_paired %>%
  group_by(A_version) %>%
  summarize(mean_diff = mean(diff))

means$pos <- as.numeric(factor(means$A_version))

ggplot(Simulation_paired, aes(x = A_version, y = diff)) +
  # Add jittered points colored by A_version
  geom_point(aes(color = A_version), position = position_jitter(width = 0.2), alpha = 0.6) +
  # Add horizontal line segments for the mean of each A_version
  geom_segment(data = means, aes(x = pos - 0.3, xend = pos + 0.3, y = mean_diff, yend = mean_diff, color = A_version), size = 1.5) +
  # Add labels and title
  labs(x = "A Version", 
       y = "Difference in Score (B - A)", 
       color = "A Version",
       title = "Difference in Slider Values Between B and A by Version") +
  # Use a clean theme
  theme_minimal()


set.seed(42)

# Define number of users
n_users <- 100

# Generate unique user IDs
user_id <- paste0("user", 1:n_users)

# Assign A versions: 25 users each for A1, A2, A3, A4
A_version <- rep(c("A1", "A2", "A3", "A4"), each = 25)

# Initialize B scores
B <- numeric(n_users)

# Generate B scores based on A version
for (i in 1:n_users) {
  if (A_version[i] %in% c("A1", "A3")) {
    B[i] <- sample(1:100, 1)          # Random between 1 and 100 for A1 and A3
  } else if (A_version[i] == "A2") {
    B[i] <- sample(80:100, 1)         # High scores for A2
  } else if (A_version[i] == "A4") {
    B[i] <- sample(1:20, 1)           # Low scores for A4
  }
}

# Initialize A scores
A <- numeric(n_users)

# Generate A scores based on A version
for (i in 1:n_users) {
  if (A_version[i] == "A3") {
    A[i] <- if (B[i] < 50) 100 else 1  # Far from B for A3
  } else {
    epsilon <- sample(-5:5, 1)         # Random variation within ±5
    A[i] <- min(100, max(1, B[i] + epsilon))  # Keep A close to B, within 1-100
  }
}

# Create the combined data frame with separate rows for B and A
Simulation <- data.frame(
  slider_values = c(rbind(B, A)),          # Interleave B and A scores
  article_number = c(rbind("B", A_version)), # Interleave "B" and A_version
  user_id = rep(user_id, each = 2)          # Repeat each user_id twice
)

# Sort by user_id for readability
Simulation <- Simulation[order(Simulation$user_id), ]

# Preview the first few rows
head(Simulation)

write.csv(Simulation, "Simulation.csv", row.names = FALSE)
