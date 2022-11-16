using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services
        , IConfiguration config)
        {
            services.AddDbContext<DataContext>(options => 
            options.UseSqlite(config.GetConnectionString("DefaultConnection")));
            services.AddSwaggerGen(c =>
                      {
                          c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
                      });
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", policy =>
                 {
                     policy
                     .AllowAnyMethod()
                     .AllowAnyHeader()
                     .WithOrigins("http://localhost:3000", "http://192.168.1.2:3000", "https://localhost:5001");
                 });
            });
            services.AddMediatR(typeof(List.Handler).Assembly);
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            return services;
        }
    }
}