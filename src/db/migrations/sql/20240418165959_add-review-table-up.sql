CREATE TABLE [dbo].[Review] (
    [Id] INT IDENTITY(1,1) PRIMARY KEY,
    [UserRut] [nvarchar](255) NULL,
    [Points] [int] NOT NULL,
    [ReviewTypeId] [int] NOT NULL,
    [ReviewPointTypeId] [int] NOT NULL,
    [SpecialtyId] [int] NOT NULL,
    [ProfessionalId] [nvarchar](255),
    [Comment] [nvarchar](255) NULL,
    [CreatedAt] DATETIMEOFFSET(7) DEFAULT SYSDATETIMEOFFSET() NOT NULL,
    [UpdatedAt] [datetimeoffset](7) NULL,
    [DeletedAt] [datetimeoffset](7) NULL
);
