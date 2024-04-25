ALTER TABLE [dbo].[Review]
   ADD CONSTRAINT FK_ReviewTypeId FOREIGN KEY (ReviewTypeId)
      REFERENCES [dbo].[ReviewType] (Id)
      ON UPDATE CASCADE
;

ALTER TABLE [dbo].[Review]
   ADD CONSTRAINT FK_ReviewPointTypeId FOREIGN KEY (ReviewPointTypeId)
      REFERENCES [dbo].[ReviewPointType] (Id)
      ON UPDATE CASCADE
;