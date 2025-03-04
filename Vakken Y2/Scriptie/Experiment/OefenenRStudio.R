install.packages("gapminder")
library(gapminder)
data("gapminder")

summary(gapminder)
x <- mean(gapminder$gdpPercap)
x

attach(gapminder)
median(pop)
hist(lifeExp)
hist(log(pop))
plot(lifeExp ~ gdpPercap)

install.packages("dyplr")
library(dplyr)

install.packages("tidyverse")
library(dplyr)

gapminder %>%
  select(country, lifeExp) %>%
  filter(country == "South Africa" | 
           country == "Ireland") %>%
  group_by(country) %>%
  summarise(Average_life = mean(lifeExp))